
# Real Estate Model for Price Prediction

Backend of Real Estate model for Price Prediction.


## API Reference

#### Hosted Backend Base URL

```bash
  https://realestate-minor-project.glitch.me
```

#### Get all Available Houses

```bash
  GET /house/availableHouses
```

#### Add a House

```bash
  POST /house/availableHouses
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. The user's ID who added this house |
| `area`      | `number` | **Required**. Area of the house |
| `noOfBedrooms`      | `number` | **Required**. Number of bedrroms in this house |
| `gymnasium`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have gym or not. |
| `swimmingPool`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have swimming pool or not. |
| `landscapeGardens`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have landsacpe gardens or not. |
| `indoorGames`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have indoor games or not. |
| `sportsFacility`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have sports facility or not. |
| `resale`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have resaled house or not. |
| `clubhouse`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have clubhouse or not. |
| `security`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have security or not. |
| `powerbackup`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have power-backup or not. |
| `carParking`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have car parking or not. |
| `joggingTrack`      | `number` |  **Required** The value is 0 or 1, indicating whether you wish to have jogging track or not. |
| `rainWaterHarvesting`      | `number` | **Required** The value is 0 or 1, indicating whether you wish to have rain wanter harvesting or not. |
| `furnishing`      | `number` | **Required**. The value is 0 or 1 or 2, 0 denotes that house is not furnished, 1 denotes that house is semi-furnished and 2 denotes that hosue is fully-furnisehd. |
| `city`      | `number` |  **Required** The value is between 0 and 5 (both inclusive), for reference please check values.js in frontend |
| `location`      | `number` | **Required** The value is between 0 and 1775 (both inclusive), for reference please check values.js in frontend |
| `wantedPrice`      | `number` | **Required**. The price that owner wants. |
| `predictedPrice`      | `number` | **Required**. The price that model predicted for this house. |

#### Login User

```bash
  POST /auth/login
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Email Id of the user. |
| `userPassword`      | `string` | **Required**. Password of the user. |

#### Signup User

```bash
  POST /auth/signup
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userEmail`      | `string` | **Required**. Email Id of the user. |
| `userPassword`      | `string` | **Required**. Password of the user. |
| `userName`      | `string` | **Required**. Name of the user. |
| `userAge`      | `number` | **Required**. Age of the user. |



#### Predict the price of a House

```bash
  POST /prediction/predict
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `area`      | `number` | **Required**. Area of the house |
| `noOfBedrooms`      | `number` | **Required**. Number of bedrroms in this house |
| `gymnasium`      | `number` |  The value is 0 or 1, indicating whether you wish to have gym or not. |
| `swimmingPool`      | `number` | The value is 0 or 1, indicating whether you wish to have swimming pool or not. |
| `landscapeGardens`      | `number` |  The value is 0 or 1, indicating whether you wish to have landsacpe gardens or not. |
| `indoorGames`      | `number` |  The value is 0 or 1, indicating whether you wish to have indoor games or not. |
| `sportsFacility`      | `number` |  The value is 0 or 1, indicating whether you wish to have sports facility or not. |
| `resale`      | `number` | The value is 0 or 1, indicating whether you wish to have resaled house or not. |
| `clubhouse`      | `number` | The value is 0 or 1, indicating whether you wish to have clubhouse or not. |
| `security`      | `number` | The value is 0 or 1, indicating whether you wish to have security or not. |
| `powerbackup`      | `number` |  The value is 0 or 1, indicating whether you wish to have power-backup or not. |
| `carParking`      | `number` |  The value is 0 or 1, indicating whether you wish to have car parking or not. |
| `joggingTrack`      | `number` | The value is 0 or 1, indicating whether you wish to have jogging track or not. |
| `rainWaterHarvesting`      | `number` | The value is 0 or 1, indicating whether you wish to have rain wanter harvesting or not. |
| `furnishing`      | `number` | **Required**. The value is 0 or 1 or 2, 0 denotes that house is not furnished, 1 denotes that house is semi-furnished and 2 denotes that hosue is fully-furnisehd. |
| `city`      | `number` | The value is between 0 and 5 (both inclusive), for reference please check values.js in frontend |
| `location`      | `number` | The value is between 0 and 1775 (both inclusive), for reference please check values.js in frontend |

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Server:** Node, Express

**Database:** MongoDB


