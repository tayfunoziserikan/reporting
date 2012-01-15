/**
 * Created by JetBrains WebStorm.
 * User: muhammet
 * Date: 15.01.2012
 * Time: 18:42
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.view.chart.Grid',{
    extend:'Ext.grid.Panel',
    alias:'widget.chart_grid',
    initComponent:function(){
        var me=this;
        Ext.apply(me,{
            title:'Grid',
            store:'Cities',
            columns:[
                {header:'Name',dataIndex:'name',flex:1},
                {header:'District Count',dataIndex:'d_count',flex:1}
            ]
        });
        me.callParent(arguments);
    }
});