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
- fill your apiKey from MLab to `src/app/services/workout.service.ts :15`
- install [nodeJS](https://nodejs.org/en), [Android Studio with android SDK](https://developer.android.com/studio)
- install ionic and cordova `npm install -g ionic cordova`

# Interesting commits

- file structure created - [see commit](https://github.com/branecko/ionic2-workouts-app/commit/2e51d45562214e197a1f4495b6e5086476c50d4c)
- get workouts from mlab - [see commit](https://github.com/branecko/ionic2-workouts-app/commit/5c80ec0879cd05f510df95768ecf76fff1e3f2e3)
- show detail page (using navParams) - [see commit](https://github.com/branecko/ionic2-workouts-app/commit/ac1945110f932a7254eece9ae1aae245d24087f6)
- add new workout to mlab using `http.post` - [see commit](https://github.com/branecko/ionic2-workouts-app/commit/5ab269cf3693ad506ea4e50ca31860a89ab5498b)
