var HashParameters = {
    hashParams: {},
    initialize: function() {
        if (window.location.hash) {
            var paramItems = (window.location.hash.substr(1)).split("&");

            for (i = 0; i < paramItems.length; i++) {
                var a = paramItems[i].split("=");
                if (a[0] === undefined) {
                    continue;
                }

                this.set(a[0], ((a[1] !== undefined) ? decodeURIComponent(a[1]) : ''));
            }
        }
    },
    get: function(key) {
        if (this.hashParams[key] !== undefined) {
            return this.hashParams[key];
        }

        return null;
    },
    set: function(key, value) {
        this.hashParams[key] = value;
        this.commit();
    },
    unset: function(key) {
        if (this.get(key) !== null) {
            delete this.hashParams[key];
        }

        this.commit();
    },
    commit: function() {
        var paramArray = [];
        var obj = this;
        Object.keys(this.hashParams).forEach(function(key,index) {
            var paramStr = key;
            if (obj.get(key) !== null) {
                paramStr += "="+encodeURIComponent(obj.get(key));
            }
            paramArray.push(paramStr);
        });

        window.location.hash = "#"+paramArray.join('&');
    }
};

HashParameters.initialize();