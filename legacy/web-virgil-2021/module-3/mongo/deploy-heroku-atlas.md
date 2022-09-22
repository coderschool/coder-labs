summary: deploy backend heroku and atlas
id: wv-m32-deploy-backend
categories: web-development
tags: web-development
status: Published
authors: Ally Nguyen
Feedback Link: https://www.coderschool.vn

# Deploy to Heroku and Atlas

This guide assume that you have been working on your local mongo database which might have data already.
In that case, here is the steps to deploy your backend app:

1. Export local data to migrate it to cloud service
2. Create Atlas cloud service account
3. Connect to Atlas with Compass (GUI)
4. Testing Compass and Atlas connection
5. Connect your project to Atlass by editing `.env/MONGO_URI`
6. Create Heroku account
7. Deploy Heroku API app
8. Config Heroku env so that it point to your Atlas cluster for data query
9. Test and success

<hr>

## Export Local Data

To migrate your local data to Atlas, first we have to export your local data. There are 2 ways to do this : using mongo CLI or using Compass. Let's keep it simple by using the GUI of Compass

1. Click export collection.
   ![export_data1](./assets/export_data1.png)
   <br>

2. Choose Export Full Collection
   ![export_data2](./assets/export_data2.png)
   <br>

3. Choose all the data fields you want in your cloud server.
   ![export_data3](./assets/export_data3.png)
   <br>

4. Continue to export it under the `json` format. Make sure the `json` file name matches your collection name. It is a good practice to follow.
![export_data4](./assets/export_data4.png)
<br>
<hr>

## Create Atlas cluster

After signing in [Mongo Atlas](./assets/https://bit.ly/3REpPEX), you will be directed to the below site. From now we will start building a cloud server, and connect it to your local database.

1. Click on Build a Database
   ![create_cluster1](./assets/create_cluster1.png)
   <br>

2. Choose the free option for practicing purposes.
   ![create_cluster2](./assets/create_cluster2.png)
   <br>

3. Select the closest server to Vietnam, in this case - is HongKong.
   ![create_cluster3](./assets/create_cluster3.png)
   <br>

4. You have created a cluster, let's continue to set up your database with `username` and `passsword`. For examples : `username: admin` & `password: admin`
   **Note:** These are important info, that will be used to connect to your cluster. ❗️ Please jot down and memorize it somewhere.
   ![create_cluster4](./assets/create_cluster4.png)
   <br>

5. Scroll down and add Entries - which IP address is authorized to write to your cluster?
   For now, let's follow the instruction and put `0.0.0.0` - which means your cluster can be accessed from everywhere.
   ![create_cluster5](./assets/create_cluster5.png)
   <br>

6. After `Finish and Close` you will be redirected to the Database.
   ![create_cluster6](./assets/create_cluster6.png)
   <br>

7. Your cluster is now ready to connect to the local Compass. Let's get URI. (URI is short for Uniform Resource Identifier )
   ![create_cluster7](./assets/create_cluster7.png)
   ![create_cluster8](./assets/create_cluster8.png)
   <br>

8. Replace username and password with your real password and copy the URI. For example: `mogo_uri/username:password/as1245.atlas.com..`

![create_cluster9](./assets/create_cluster9.png)
<br>

<hr>

## Connect Atlas server to your local data via Mongo Compass.

With the above steps, you already have a cloud server waiting. From now we will connect your local to the cloud via Mongo Compass.

1. Paste your URI here to make new connection.
   ![mongo_compass1](./assets/mongo_compass1.png)
   <br>

2. Look at the left corner to check up what server you're connecting to. If it's a cluster, you can now start importing data.
   ![mongo_compass2](./assets/mongo_compass2.png)
   <br>

3. In tab Database, click on Create database.
   ![mongo_compass3](./assets/mongo_compass3.png)
   <br>

4. Select your data type, in this case is `json` and Import.
   ![mongo_compass4](./assets/mongo_compass4.png)
   <br>

5. This is the expected result.
   ![mongo_compass5](./assets/mongo_compass5.png)
   <br>

<hr>

## Checking Atlas and Compass Connection

Now, let's get back to your Atlas!

1. Switch to the **Collections** tab to see imported data
   ![checkup_atlast1](./assets/checkup_atlas1.png)

If you see your data then pad yourself in the back.
<br>

<hr>

## Deploy to Heroku

1. In your `.env`, connect Atlas server to your backend project.
   ![heroku1](./assets/heroku1.png)
   ![heroku2](./assets/heroku2.png)
   <br>

2. Create Heroku account
   ![heroku3](./assets/heroku3.png)
   <br>

3. Create a new project with this button.
   ![heroku4](./assets/heroku4.png)
   ![heroku5](./assets/heroku5.png)
   <br>

4. Connect GitHub and Heroku
   ![heroku6](./assets/heroku6.png)
   ![heroku7](./assets/heroku7.png)
   ![heroku8](./assets/heroku8.png)
   <br>

5. Config Heroku env so that it point to your Atlas cluster for data query. Key: `MONGO_URI`. Value: your atlas Cluster URI.
   ![heroku9](./assets/heroku9.png)
   <br>

6. Choose the branch
   ![heroku10](./assets/heroku10.png)
   <br>

7. Now your app is ready to deploy.
   ![heroku11](./assets/heroku11.png)

## The end
