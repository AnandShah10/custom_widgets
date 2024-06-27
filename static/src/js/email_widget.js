/**@odoo-module**/
import { registry } from "@web/core/registry";
import { EmailField } from "@web/views/fields/email/email_field";
import { _t } from "@web/core/l10n/translation";

export class ValidEmailField extends EmailField{
    static template = "email_validation_widget.ValidEmailField";
    setup()
    {
        super.setup();
    }
    get isValidEmail()
    {
        let re = /^\S+@\S+\.\S+$/
        return re.test(this.props.record.data[this.props.name]);
    }
}
export const validEmailField = {
    component: ValidEmailField,
    displayName: _t("Email"),
    supportedTypes: ["char"],
    extractProps: ({ attrs }) => ({
        placeholder: attrs.placeholder,
    }),
};
registry.category('fields').add('valid_email',validEmailField);