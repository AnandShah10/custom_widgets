from odoo import fields,models

class ResPartner(models.Model):
    _inherit='res.partner'
    username = fields.Char()
    expected_salary = fields.Integer()