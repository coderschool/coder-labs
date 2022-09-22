summary: mock data with node js
id: wv-m32-mongo-atlas
categories: web-development
tags: web-development
status: Published
authors: Tuan Hoang, Tan Vo
Feedback Link: https://www.coderschool.vn

# Database on the cloud

## Host your database with Atlas

Todos:

- why host data
- what is atlas
- what is benefit
- what we learn
  - how to create account
  - how to authenticate
  - how to connect with compass and node project
  - how to import/export data (migration)
- what are alternatives (firebase, amazon, ... )

## Get started with MongoDB Atlas

- Select Create an Organization

![./assets/create_org.png](./assets/create_org.png)

- Name your Organization `MDBU`. Make sure that your cloud service is _Atlas_, then hit Next.

![./assets/org_name.png](./assets/org_name.png)

- Hit Create Organization

![./assets/org_members.png](./assets/org_members.png)

- Hit New Project

![./assets/create_proj.png](./assets/create_proj.png)

- Name your Project `M001` and hit Next

![./assets/proj_name.png](./assets/proj_name.png)

- Select Create Project

![./assets/proj_members.png](./assets/proj_members.png)

- Select Build a Cluster

![./assets/create_cluster.png](./assets/create_cluster.png)

- Select the left-most option that is FREE and hit Create a cluster

![./assets/free_tier.png](./assets/free_tier.png)

- Select the region that is geographically closest to your location. On the bottom of the page change the cluster name to `Sandbox`. Create the cluster. _This step might take a minute or two to complete._

![./assets/name_cluster.png](./assets/name_cluster.png)

- Now that you have an Atlas cluster you need to grant access to your IP Address and create a Database User.
  - Select Connect from the cluster view.
    ![./assets/cluster_connect.png](./assets/cluster_connect.png)
  - Select the _right-most_ option Allow Access from Anywhere and confirm your selection by clicking on Add IP Address. Allowing access from anywhere is not\* a good security practice. Clusters that are used for production should \*\*not have this enabled.
    ![./assets/allow_access.png](./assets/allow_access.png)
  - Create a Database User, then click on Create Database User
    ![./assets/create_user.png](./assets/create_user.png)
  - Close the Connection menu at the _lower left corner_ of the window.
    ![./assets/access_done.png](./assets/access_done.png)

**Load the [Sample Dataset](https://docs.atlas.mongodb.com/sample-data/sample-training)** (for practicing)

Select the "..." option in the cluster menu -> choose the "Load Sample Dataset" option, then confirm your choice.

![./assets/load_sample_1.png](./assets/load_sample_1.png) ![./assets/load_sample_2.png](./assets/load_sample_2.png)

When the dataset is loaded the graph labeled "Logical Size" on the right side of the screen should go up and display the size of the dataset that is above zero and below _512 MB_. Your graph may look different than the picture below.

![./assets/sample_done.png](./assets/sample_done.png)
{"mode":"full","isActive":false}

## The end

Great job finishing this lab!

If you want to read more about this topic here are some cool materials to expand your knowledge

### Further resources

todos
