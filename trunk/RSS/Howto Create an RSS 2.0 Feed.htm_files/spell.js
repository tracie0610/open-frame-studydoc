		function ActivSpellClass() {
			this.init();	
		}

		ActivSpellClass.prototype = new Object();
		ActivSpellClass.prototype.init = function() {
			this.argsIndex = -1;
			this.fieldRefs = new Array();
			this.ignore = new Array();
			this.change = new Array();
			this.changeto = new Array();
			this.replacements = new Array();
		}
		
		ActivSpell = new ActivSpellClass();
		
		function nextField() {

		}
	
		function spell() 
		{	
			ActivSpell.init();
			ActivSpell.fieldRefs = arguments;
			
			//override nextField since registering onpropertychange fires itself
			nextField = function() {
				ActivSpell.argsIndex++;
				
				if(ActivSpell.argsIndex < ActivSpell.fieldRefs.length) {
					if (eval(ActivSpell.fieldRefs[ActivSpell.argsIndex]).length == 0) {
						nextField();
					}
					
				ActivSpellWin = window.open("/spellchecker/window.cfm?jsvar=" + ActivSpell.fieldRefs[ActivSpell.argsIndex], "ActivSpellWin", "height=230,width=450,status=no,toolbar=no,menubar=no,location=no");
				} else {
					spellCheckComplete();
				}
			}
			
			//index ActivSpell.argsIndex
			ActivSpell.argsIndex++;
			
			//send the first field to spellcheck
			if (eval(ActivSpell.fieldRefs[ActivSpell.argsIndex]).length == 0) {
				nextField();
			} else {
				ActivSpellWin = window.open("/spellchecker/window.cfm?jsvar=" + ActivSpell.fieldRefs[0], "ActivSpellWin", "height=230,width=450,status=no,toolbar=no,menubar=no,location=no");	
			}
		}
		
		function spellCheckComplete() {
			alert("Spell Check Complete!");
			
			ActivSpell.argsIndex = -1;
			nextField = function() {}
			ActivSpellWin.close();
		}