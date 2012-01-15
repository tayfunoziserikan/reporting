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
    proxy:{
        type:'jsonp',
        url:'http://pigon.heroku.com/reporting/cities',
        reader:{
            type:'json',
            root:'data.items'
        }
    }
});
