function raspberryweather() {
    return "[line_chart title=\"My weather station readings\" day=\"Today\" display=\"Temperature\" v_title=\"Temperature\" scale=\"Celsius\" width=\"600px\" height=\"400px\"]"
}

(function() {

    tinymce.create('tinymce.plugins.raspberryweather', {

        init : function(ed, url){
            ed.addButton('raspberryweather', {
                title : 'Add the Raspberry Weather shortcode',
                onclick : function() {
                    ed.execCommand(
                        'mceInsertContent',
                        false,
                        raspberryweather()
                        );
                },
                image: url + "/wand.png"
            });
        },

        getInfo : function() {
            return {
                longname : 'Raspberry Weather plugin button',
                author : 'Peter Kodermac',
                authorurl : 'http://www.kodermac.com',
                infourl : '',
                version : "1.0"
            };
        }
    });

    tinymce.PluginManager.add('raspberryweather', tinymce.plugins.raspberryweather);
    
})();
