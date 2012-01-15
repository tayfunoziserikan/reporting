/**
 * Created by JetBrains WebStorm.
 * User: muhammet
 * Date: 15.01.2012
 * Time: 17:31
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.view.chart.Index',{
    extend:'Ext.window.Window',
    alias:'widget.chart_window',
    renderTo:Ext.getBody(),
    initComponent:function(){
        var me=this;
        Ext.apply(me,{
            title:'Chart Example',
            width:800,
            height:600,
            maximizable: true,
            top:50,
            layout:'fit',
            tbar:[{
                text:'Refresh'
            }]
   ,
            items:[{
                xtype:'chart_tab'
            }],
            autoShow:true,
            autoScroll:true
        });
        me.callParent(arguments);
    }
});