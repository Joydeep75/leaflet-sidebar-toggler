L.Control.SidebarPinnable = L.Control.Sidebar.extend({

    _pinned: false,

    isPinned: function () {
        return this._pinned;
    },

    pinned: function () {
        L.DomUtil.addClass(this.getContainer(), 'pinned');
        this._pinned = true;
    },

    unPinned: function () {
        L.DomUtil.removeClass(this.getContainer(), 'pinned');
        this._pinned = false;
    }
});

L.control.sidebarPinnable = function (options) {
    return new L.Control.SidebarPinnable(options);
};
