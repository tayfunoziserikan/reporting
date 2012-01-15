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

    views: ['chart.Pie','chart.Index','chart.Tab','chart.Grid','chart.Column','chart.Bar']

});

