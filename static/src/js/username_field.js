/**@odoo-module**/
import { registry } from "@web/core/registry";
import { CharField } from "@web/views/fields/char/char_field";
import { _t } from "@web/core/l10n/translation";

export class UsernameField extends CharField{
    static template = "email_validation_widget.UsernameField";
    static components = {CharField};
    setup()
    {
        super.setup();
    }
    get emailDomain(){
        const {email} = this.props.record.data;
        return email ? email.split('@')[1]:'';

    }

}
export const usernameField = {
    component: UsernameField,
    displayName: _t("Username"),
    supportedTypes: ["char"],
    extractProps: ({ attrs }) => ({
        placeholder: attrs.placeholder,
    }),
};
registry.category('fields').add('username',usernameField);