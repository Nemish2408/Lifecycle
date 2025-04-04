export const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("https://randomuser.me/api/")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          if (data.results && data.results.length > 0) {
            const user = data.results[0];
            resolve({
              name: {
                first: user.name.first,
                last: user.name.last
              },
              email: user.email,
              picture: user.picture,
              location: {
                city: user.location.city,
                country: user.location.country
              }
            });
          } else {
            throw new Error("No user data found");
          }
        })
        .catch((error) => reject(error));
    }, 3000); // Simulate network delay of 3 seconds
  });
};