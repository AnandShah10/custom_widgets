/** @odoo-module **/

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { standardFieldProps } from "@web/views/fields/standard_field_props";
import { useState } from "@odoo/owl";
export class RangeField extends Component {
    static template = "email_validation_widget.RangeField";
    static props = {
        ...standardFieldProps,
//        update:Function,
    };
    get range() {
        console.log(this.props);
        return this.props.record.data[this.props.name] || "";
    }
    get currency()
    {
        let currency_id = this.props.record.data.currency_id || this.props.record.data.property_purchase_currency_id;
        let computedCurrency = currency_id ? currency_id[1]: '';
        return computedCurrency;
    }
}

export const rangeField = {
    component: RangeField,
    supportedTypes: ["integer"],
    extractProps(fieldInfo, dynamicInfo) {
        return {
            readonly: dynamicInfo.readonly,
        };
    },
};
registry.category("fields").add("range", rangeField);
