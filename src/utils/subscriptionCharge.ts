const subscriptionPlans:  any = {
  primary: {
    monthly: 500,
    quarterly: 1000,
    yearly: 3000,
  },
  junior: {
    monthly: 800,
    quarterly: 1500,
    yearly: 5000,
  },
  senior: {
    monthly: 1000,
    quarterly: 2700,
    yearly: 10000,
  },
  full: {
    monthly: 1500,
    quarterly: 5000,
    yearly: 18000,
  },
};

function subscriptionCharge(plan: string, duration: string) {
  for (const keys in subscriptionPlans) {
    const getPlan: any = subscriptionPlans[plan];
    if (getPlan && getPlan.hasOwnProperty(duration)) {
      return getPlan[duration];
    }
    else{
        return 'Something went wrong!'
    }
  }
}

export default subscriptionCharge;
