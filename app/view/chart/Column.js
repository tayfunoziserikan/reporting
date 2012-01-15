/**
 * Created by JetBrains WebStorm.
 * User: muhammet
 * Date: 15.01.2012
 * Time: 18:58
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.view.chart.Column',{
    extend:'Ext.chart.Chart',
    alias:'widget.chart_column',
    initComponent:function(){
        var me=this;
        Ext.apply(me,{
           width:700,
            height:500,
            title:'Column Chart',
            store:'Cities',
            axes:[{
                type:'Numeric',
                position:'bottom',
                fields:['d_count'],
                title:'Population',
                grid:true,
                minimum:0
            },{
                type:'Category',
                position:'left',
                fields:['name'],
                title:'Cities'
            }],
            axes:[{
                type:'Numeric',
                position:'left',
                fields:['d_count'],
                title:'Population',
                grid:true,
                minimum:0
            },{
                type:'Category',
                position:'bottom',
                fields:['name'],
                title:'Cities'
            }],
            series:[{
                type:'column',
                axis:'left',
                highlight:true,
                tips:{
                    trackMouse:true,
                    width:140,
                    height:28,
                    renderer:function(storeItem,item){
                        this.setTitle(storeItem.get('name') + ': ' + storeItem.get('d_count'));
                    }
                },
                label:{
                    display:'insideEnd',
                    'text-anchor':'middle',
                    field:'d_count',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation:'vertical',
                    color:'#333'
                },
                xField:'name',
                yField:'d_count'
            }]
        });
        me.callParent(arguments);
    }
});