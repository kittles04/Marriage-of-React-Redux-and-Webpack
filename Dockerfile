#Use the official image as a parent image.
FROM node:current-slim

#Set the working directory
WORKDIR /Users/owner/Desktop/React-Redux-Webpack-Oh-My

#Copy the file from your host to your current location
COPY package.json .