/**
 * Created by JetBrains PhpStorm.
 * User: Muhammet
 * Date: 28.09.2011
 * Time: 14:54
 * To change this template use File | Settings | File Templates.
 */
Ext.require('Ext.chart.*');
Ext.define('Pigon.view.chart.Pie' ,{
    extend: 'Ext.chart.Chart',
    alias : 'widget.chart_pie',
    initComponent:function(){
        var me=this;
        Ext.apply(me,{

            title :'Pie Chart',
            animate:true,
            store:'Cities',
            width:800,
            height:600,
            shadow:true,
            legend:{
                position:'bottom'


            },
            insetPadding:25,
            theme:'Base:gradients',
            series:[{
                type:'pie',
                field:'d_count',
                showInLegend:true,
                highlight:{
                segment:{
                    margin:20
                    }
                },
                tips:{
                    trackMouse:true,
                    width:150,
                    height:30,
                    renderer:function(storeItem,item){
                        this.setTitle(storeItem.get('name')+' : '+ storeItem.get('d_count'));
                    }
                },
                label:{
                field:'name',
                display:'rotate',
                contrast:true,
                    font:'15px Arial'
                },
                animate:true
            }]
        });
        me.callParent(arguments);
    }
});