"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NetworkConnectionSchema = (function () {
    function NetworkConnectionSchema() {
    }
    NetworkConnectionSchema.getAttributeTypeMap = function () {
        return NetworkConnectionSchema.attributeTypeMap;
    };
    NetworkConnectionSchema.discriminator = undefined;
    NetworkConnectionSchema.attributeTypeMap = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "connectedAt",
            "baseName": "connected_at",
            "type": "number"
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "isTrustedPeer",
            "baseName": "is_trusted_peer",
            "type": "boolean"
        },
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
            "name": "listenPort",
            "baseName": "listen_port",
            "type": "number"
        },
        {
            "name": "mirror",
            "baseName": "mirror",
            "type": "number"
        },
        {
            "name": "outgoing",
            "baseName": "outgoing",
            "type": "boolean"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "NetworkConnectionSchema.StateEnum"
        },
        {
            "name": "unconfirmedVerifyTransaction",
            "baseName": "unconfirmed_verify_transaction",
            "type": "NetworkConnectionSchemaUnconfirmedVerifyTransaction"
        },
        {
            "name": "userAgent",
            "baseName": "user_agent",
            "type": "string"
        }
    ];
    return NetworkConnectionSchema;
}());
exports.NetworkConnectionSchema = NetworkConnectionSchema;
(function (NetworkConnectionSchema) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Pending"] = 'pending'] = "Pending";
        StateEnum[StateEnum["Connected"] = 'connected'] = "Connected";
        StateEnum[StateEnum["Introduced"] = 'introduced'] = "Introduced";
    })(StateEnum = NetworkConnectionSchema.StateEnum || (NetworkConnectionSchema.StateEnum = {}));
})(NetworkConnectionSchema = exports.NetworkConnectionSchema || (exports.NetworkConnectionSchema = {}));
exports.NetworkConnectionSchema = NetworkConnectionSchema;
//# sourceMappingURL=networkConnectionSchema.js.map