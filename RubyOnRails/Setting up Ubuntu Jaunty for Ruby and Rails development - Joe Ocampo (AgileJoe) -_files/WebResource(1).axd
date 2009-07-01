function CollapseQuote(button)
{
	var collapseArea = document.getElementById(button.id + '_quote');
	if(collapseArea.style.display == 'none')
	{
		collapseArea.style.display = 'inline';
		button.innerHTML = button.getAttribute('expandedText');
	}
	else
	{
		collapseArea.style.display = 'none';
		button.innerHTML = button.getAttribute('collapsedText');
	}
}