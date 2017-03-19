# Aurity Dev Client Timesheet
We want to keep app as simple as we can, so the main features of the app are:
- select a user
- get a month for selected user and be able to navigate to other months
- select a week and approve/reject it

Take a look on example screenshot on the bottom it should clear the task. But feel free to implement the app as you want. The main goal is to see how you structure the code and breakdown elements. If you can please use Redux, extra points for example tests!

## API Endpoints
**Users:**
https://timesheet-staging-aurity.herokuapp.com/api/users

**Monthly View / User:**
https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/month_number/year/user_id
e.g. https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/10/2017/3

*Some info about data structure:*

- status: approved, rejected, waiting, undefined
- "approvers" - list of users who can approve current week
- "approved_by" - user who approved week
- “approved_by_data" - approved date

*Note:* DB for users has been seeded only for 2017 year
-> therefore for other months you can't get: {"message":"Not Found"}

**approve/ reject chosen week**
*PUT:* https://timesheet-staging-aurity.herokuapp.com/api/training/weeks/week_id/users/approved_id

## Install
```
npm install or yarn install
```

## Run
```
npm start
```
