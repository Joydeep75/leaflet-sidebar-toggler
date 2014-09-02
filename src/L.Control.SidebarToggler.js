L.Control.SidebarToggler = L.Control.extend({
    options: {
        position: 'topleft',
        title: {
            false: 'View informations',
            true: 'Hide informations'
        }
    },

    initialize: function (sidebar, options) {
        L.setOptions(this, options);
        this.sidebar = sidebar;
    },

    onAdd: function (map) {
        var container = L.DomUtil.create('div', 'leaflet-control-sidebarToggler leaflet-bar leaflet-control');
        if (this.options.class) {
            this.link = L.DomUtil.create('a', 'leaflet-control-sidebarToggler-button leaflet-bar-part ' + this.options.class, container);
        } else {
            this.link = L.DomUtil.create('a', 'leaflet-control-sidebarToggler-button leaflet-bar-part', container);
        }

        this.link.href = '#';

        this._map = map;
        this.sidebar.on('show', this._toggleTitle, this);
        this.sidebar.on('hide', this._toggleTitle, this);
        this._toggleTitle();

        L.DomEvent.on(this.link, 'click', this._click, this);

        return container;
    },

    _click: function (e) {
        L.DomEvent.stopPropagation(e);
        L.DomEvent.preventDefault(e);
        this.sidebar.toggle();
    },

    _toggleTitle: function() {
        this.link.title = this.options.title[this.sidebar.isVisible()];
    }
});

L.control.sidebarToggler= function (options) {
    return new L.Control.SidebarToggler(options);
};
