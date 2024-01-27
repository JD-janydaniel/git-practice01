var
remoteJSON = {"allowExternalMembers": "false", "whoCanJoin": "CAN_REQUEST_TO_JOIN"},
    localJSON = {"whoCanJoin": "CAN_REQUEST_TO_JOIN", "allowExternalMembers": "false"};
    
console.log( _.isEqual(remoteJSON, localJSON) );