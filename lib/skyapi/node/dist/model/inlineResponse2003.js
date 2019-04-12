"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InlineResponse2003 = (function () {
    function InlineResponse2003() {
    }
    InlineResponse2003.getAttributeTypeMap = function () {
        return InlineResponse2003.attributeTypeMap;
    };
    InlineResponse2003.discriminator = undefined;
    InlineResponse2003.attributeTypeMap = [
        {
            "name": "lastReceived",
            "baseName": "last_received",
            "type": "number"
        },
        {
            "name": "lastSent",
            "baseName": "last_sent",
            "type": "number"
        },
        {
            "name": "outgoing",
            "baseName": "outgoing",
            "type": "boolean"
        },
        {
            "name": "mirror",
            "baseName": "mirror",
            "type": "number"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "listenPort",
            "baseName": "listen_port",
            "type": "number"
        },
        {
            "name": "isTrustedPeer",
            "baseName": "is_trusted_peer",
            "type": "boolean"
        },
        {
            "name": "connectedAt",
            "baseName": "connected_at",
            "type": "number"
        },
        {
            "name": "unconfirmedVerifyTransaction",
            "baseName": "unconfirmed_verify_transaction",
            "type": "InlineResponse2003UnconfirmedVerifyTransaction"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "InlineResponse2003.StateEnum"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        }
    ];
    return InlineResponse2003;
}());
exports.InlineResponse2003 = InlineResponse2003;
(function (InlineResponse2003) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Connected"] = 'connected'] = "Connected";
        StateEnum[StateEnum["Introduced"] = 'introduced'] = "Introduced";
    })(StateEnum = InlineResponse2003.StateEnum || (InlineResponse2003.StateEnum = {}));
})(InlineResponse2003 = exports.InlineResponse2003 || (exports.InlineResponse2003 = {}));
exports.InlineResponse2003 = InlineResponse2003;
//# sourceMappingURL=inlineResponse2003.js.map