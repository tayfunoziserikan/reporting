/**
 * Created by JetBrains PhpStorm.
 * User: Muhammet
 * Date: 28.09.2011
 * Time: 14:33
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.controller.Report', {
    extend: 'Ext.app.Controller',

    stores: ['Cities'],

    models: ['City'],

    views: ['chart.Pie','chart.Index','chart.Tab','chart.Grid','chart.Column','chart.Bar'],

    init: function() {
        this.control({
            'viewport > userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            }
        });
    },

    editUser: function(grid, record) {
        //var edit = Ext.create('AM.view.user.Edit').show();

        //edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getUsersStore().sync();

    }
});

