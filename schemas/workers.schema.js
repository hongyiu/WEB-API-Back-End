module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/user",
  "title": "Users",
  "description": "User of the website",
  "type": "object",
  "properties": {
    "firstname": {
      "description": "First name of the user",
      "type": "string"
    },
    "lastname": {
      "description": "Last name of the user",
      "type": "string"
    },
    "username": {
      "description": "Username of the user for login",
      "type": "string"
    },
    "about": {
      "description": "Description of the user",
      "type": "string"
    },
    "password": {
      "description": "Password of the user",
      "type": "string"
    },
    "email": {
      "description": "E-mail of the user",
      "type": "email"
    },
    "avatarurl": {
      "description": "Avatar URL",
      "type": "url"
    },
    "workerid": {
      "description": "ID to identify worker",
      "type": "integer",
      "minimum": 0
    }
  },
  "required": ["username", "email", "password"]
}
