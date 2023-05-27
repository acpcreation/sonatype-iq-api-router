# Sonatype API Service

This script serves to act as a proxy between Sonatype IQ Server APIs and any kind of reporting frontend. This service aims to circumvent CORS errors.

*Copyright Sonatype Inc. 2023*

Contributors:
- Alexander Plattel: aplattel@sonatype.com


## How to use
Via the terminal in this directory, run the service by typing:
```
- npm install
- npm start
```


Route requests to Sonatype IQ as **POST** requests to `http://localhost:3000/sonatypeiq` with the IQ API details in the body.

Syntax:
```
curl --location 'http://localhost:3000/sonatypeiq' \
--header 'Content-Type: application/json' \
--data '{
    "method": "get",
    "url": "http://localhost:8070/api/v2/applications",
    "headers": {
        "Content-Type": "application/json",
        "Authorization": "Basic YWRtaW46YWRtaW4hMjM="
    },
    "data": {}
}'
```


## The Fine Print

Remember:
It is worth noting that this is **NOT SUPPORTED** by Sonatype, and is a contribution of ours to the open source
community (read: you!)

* Use this contribution at the risk tolerance that you have
* Do NOT file Sonatype support tickets related to `ossindex-lib`
* DO file issues here on GitHub, so that the community can pitch in

Phew, that was easier than I thought. Last but not least of all - have fun!
