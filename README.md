# ionic2-workouts-app

Sample Android app created using ionic 2 and mLab database

# Prerequisities

- create account on [mLab](https://mlab.com/)
- on dashboard create new deployment and select AWS(cloud provider), single node, Sandbox and dbname: `myworkouts_dev` and confirm
- open database > users and add db user. Remember user + pwd.
- create collection `workouts` and insert some test data for example:
```
{
    "title": "Morning Run",
    "note": "1 run at 5 am",
    "type": "Jogging"
}
```

- install [nodeJS](https://nodejs.org/en), [Android Studio with android SDK](https://developer.android.com/studio)
- install ionic and cordova `npm install -g ionic cordova`
