/**
 * Created by JetBrains WebStorm.
 * User: muhammet
 * Date: 15.01.2012
 * Time: 18:29
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.view.chart.Tab',{
    extend:'Ext.tab.Panel',
    alias:'widget.chart_tab',
    initComponent: function(){
        var me=this;
        Ext.apply(me,{
            title:'Tab Panel For Chart',
            activeTab:0,
            autoScroll:true,
            items:[{
                xtype:'chart_pie'
            },{

                xtype:'chart_grid'
            },{

                xtype:'chart_column'
            },{
                xtype:'chart_bar'
            }]
        });
        me.callParent(arguments);
    }

});