/**
 * Created by JetBrains WebStorm.
 * User: muhammet
 * Date: 15.01.2012
 * Time: 22:05
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.view.chart.Bar',{
    extend:'Ext.chart.Chart',
    alias:'widget.chart_bar',
    initComponent:function(){
        var me=this;
        Ext.apply(me,{
            title:'Bar Chart',
            width:800,
            height:600,
            animate:true,
            store:'Cities',
            axes:[{
                type:'Numeric',
                position:'bottom',
                fields:['d_count'],
                label:{
                    renderer:Ext.util.Format.numberRenderer('0,0')
                },
                title:'Population',
                grid:true,
                minimum:0
            },{
                type:'Category',
                position:'left',
                fields:['name'],
                title:'Cities'

            }],
            series:[{
                type:'bar',
                axis:'bottom',
                highlight:true,
                tips:{
                    trackMouse:true,
                    width:150,
                    height:30,
                    renderer:function(storeItem,item){
                        this.setTitle(storeItem.get('name')+' : '+ storeItem.get('d_count'))
                    }
                },
                label:{
                    display:'insideEnd',
                    field:'d_count',
                    renderer:Ext.util.Format.numberRenderer('0'),
                    orientation:'horizontal',
                    color:'#444',
                    'text-anchor':'middle'
                },
                xField:'name',
                yField:'d_count'

            }]
        });
        me.callParent(arguments);
    }
});