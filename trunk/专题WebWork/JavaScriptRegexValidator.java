package com.tdpext.base.validation;

import java.util.Map;

import com.opensymphony.webwork.validators.ScriptValidationAware;
import com.opensymphony.xwork.validator.ValidationException;
import com.opensymphony.xwork.validator.validators.FieldValidatorSupport;
/**
 * 
 * @author AlphaZhang
 * 正则表达式校验类
 *
 */
public class JavaScriptRegexValidator extends FieldValidatorSupport implements
		ScriptValidationAware {

	private String expression;

	public String validationScript(Map parameters) {
		
		String field = (String) parameters.get("name");
		StringBuffer js = new StringBuffer();
		js.append("var   regex=new   RegExp(\""+expression+"\");\n");
		js.append("value = form.elements['" + field + "'].value;\n");
		js.append("if (!regex.test(value)){\n");
		js.append("\talert('" + getMessage(null) + "');\n");
		js.append("\treturn '" + field + "';\n");
		js.append("}\n");
		js.append("\n");
		return js.toString();
	}

	public void validate(Object object) throws ValidationException {
		String fieldName = getFieldName();
		Object value = getFieldValue(fieldName, object);
		if (value == null)
			addFieldError(fieldName, object);
	}
	public String getExpression() {
		return expression;
	}
	public void setExpression(String expression) {
		this.expression = expression;
	}
}
