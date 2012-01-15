/**
 * Created by JetBrains PhpStorm.
 * User: Muhammet
 * Date: 09.10.2011
 * Time: 09:25
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Pigon.store.Cities', {
    extend: 'Ext.data.Store',
    model: 'Pigon.model.City',
    autoLoad: true,
    
    /*proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }*/
    proxy:{
        type:'jsonp',
        url:'http://localhost:3000/reporting/cities',
        reader:{
            type:'json',
            root:'data.items'
        }
    },
    listeners:{
        load:function(store,records){
            Ext.each(records,function(rec){
                console.log(rec.get('title'));
            });
        }
    }
});
