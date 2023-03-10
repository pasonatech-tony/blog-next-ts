import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      // projectId: "thulinhred-234a6",
      // clientEmail:
      //   "firebase-adminsdk-lf0hw@thulinhred-234a6.iam.gserviceaccount.com",
      // // privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      // privateKey:
      //   "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDLSTjzGJ34dxsG\ngM7TJY+zniCDEXUYA5nKcxJC0m3t7ZnNoL6OzwLWzMDo1WQ+LVGlSOPyJ4XpJXq4\n2X6FQ5F7YbLPcMWEe5aAMYfv/K3laN770QfEbShFR2jBk4Qrb4J2iOSJwtjBJKHE\nO7prDua6ix3CLLdskh0wce2Fr1oEHHrB3LiPImjpnc80D2kGUCocylbAviu65nnr\n3FIYwVW+FTTA7HCApDoxu8Ztx19i5NOrByIohSl2fiCy72KVjSaqJGCqn66N47CO\nBqk0vfrnnaRgj8Gm0n+a7yK0eGS6sVdDdtiUhn1zajUP6YYf+ON1L8gdmMd5tqoD\nhvbQdQELAgMBAAECggEAEs7eAYPcDcJ7UiE1wYxenMg7CtVhJ40hu/zkiiEtAY/z\npHZEWzMk+JmuGXywzx3jSW8Sg/OLLLSGg7a/wXWsbqVt5UpyQ90pYgfzI02WCz0m\nMFc5KD/PM4W1V/+dgWVKRUxKFMLdyhTpEJ5UE5an20eGw9HeUKG+KJ7J0o4UPn/3\n1RCR7RGqpYG+Hz7hh70Ll6J/TQl+mI0VQCvtZv6yvQgMhT+ahP4RRNZTCGUbegne\nk4cMcfVZxmA3O0pNfBJY3HQ/VufKyNDFnD34eOOpSBJPAiIhISH3quzSV2Yz0Fd7\n81tbDfOmYLE3i30yiKIQDQOVfwSzTEPoHuOVmzTfkQKBgQDoiyNKsWfYRxrbsQm/\n/DTR4xp+fN6qT1RSKLG4SDJD0jLH40a04qzxD92I/1PHSgNaYUjmslHc3cprWy6O\nHtG1wnA0lOqzr/pRTrf/Fq3zgua5+LzQDWn8KTejkTNql73gLJweFsr4OS0dmzXz\nYbYw0UhgrxSyfafVXIO94VRfMQKBgQDfypUUCZzFEIUevtOOCOvljHSB7JIyBhvt\nUcGjolLrAZLGfGjszJKvlTAL4JDbnyV2x8OYaI0HEmwT76M+SwqwxV/eLses4dtW\nS80KYnP/jUNLEgGgt1Eh0Luk33vPycUopso+0PXVTdiDknoyC7rZA8zz71zTRVfK\nl3InvQNs+wKBgQCDpQkEpuv/3zkQN+gqHHAWhfegtbYkOialIE6D4bM6+8stp7eG\nfXCkQ3QJs2nNP1QonTx1BWwcmh6Wqhbv8/iKahm1WryHns8ZqnO1YDR3z5oom+zf\n50ghrX/HBFNUO7UNLJPw4Lxky5GD2jMvphhLCJ9txI/1//a8bdRS8TYfcQKBgH3M\nexDQdnewWaR20KU/Dpvy4GtIeMX1+SzmkFtTnBjOwZshxDmYpbxduKx0h/ls9LpY\ngPLjkqMvD+IFC1axCElmKgXTdhsQuyM/aPs1bM9ysSk57gBSDCFeHJ0Jo6eiXFoF\nqBq3i/lj0Rnk9Ru8zEPBhyx4mU2J5VfU2i7MaWiRAoGALvBQsPyP/S29Vw37mLSZ\n8dZpS9LG5tZsGorq/BAmqoqx4myHaSoYhtIxn5mnK+8WLCgIN8ob4CsQ6W2mO319\n0qSC/hYrSzMAoNNTapekCyShWREMRYL0AjEQCeFLqiWh3LK9103IPRpsS05O1i2F\nBi51f1yMgTmFdxyqc0rIqKQ=\n-----END PRIVATE KEY-----\n",
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
    // databaseURL:
    //   "https://thulinhred-234a6-default-rtdb.asia-southeast1.firebasedatabase.app",
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

const db = admin.database();

export { db };
