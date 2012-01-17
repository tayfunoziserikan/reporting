/**
 * Created by JetBrains PhpStorm.
 * User: Muhammet
 * Date: 28.09.2011
 * Time: 14:22
 * To change this template use File | Settings | File Templates.
 */

// Ext Loader configuration
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Pigon',
    appFolder: 'app',
    controllers:['Report'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'chart_window'
            }
        });
    }
});