---
title: Introduction
date: 1970-01-01
---

![](assets/private-cloud-leadspace@2x.jpg)

# Enhancing customer helpdesks with Watson Discovery and Assistant on IBM Cloud Pak for Data

<br />

## What you will build
In this workshop, we walk you through a working example of a web application that utilizes multiple Watson services on [IBM Cloud Pak for Data](https://www.ibm.com/products/cloud-pak-for-data) to create a better customer care experience.

Using the Watson Discovery, document queries will be focused to search the most relevant information found in a typical owner's manual.

Using Watson Assistant, we will use a standard customer care dialog to handle a typical conversation between a custmomer and a company representitive. When a customer question involves operation of a product, the Assistant dialog will communicate with the Discovery service using a webhook.

The webhook will be created by defining a web action using IBM Cloud Functions (Apache OpenWhisk).

In addition to exploring Watson Discovery, Assistant, and Cloud Functions, we'll also examine IBM Cloud Pak for Data and discuss the differences between public, private, and hybrid clouds.

![](assets/ICP4D-sign-in.png)


### What is Watson Discovery?

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### What is Watson Assistant?

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


### What are webhooks and Apache OpenWhisk (and IBM Cloud Functions)?

A webhook is a mechanism that allows you to call out to an external program based on something happening in your program. When used in a Watson Assistant dialog skill, a webhook is triggered when the Assistant processes a node that has a webhook enabled. The webhook collects data that you specify or that you collect from the user during the conversation and save in context variables, and sends the data to the Webhook request URL as an HTTP POST request. The URL that receives the webhook is the listener. It performs a predefined action using the information that is provided by the webhook as specified in the webhook definition, and can optionally return a response.

In our workshop, the webhook will communicate with an IBM Cloud Functions web action, which is connected to the Watson Discovery service.

## Goals
After completing this workshop, you'll understand how to:
* Find your way around IBM Cloud Pak for Data.
* Understand the IBM Watson Discovery
* Understand the IBM Watson Assistant
* Understand the Apache OpenWhisk and IBM Cloud Functions

## Estimated length of workshop
* 2-3 hours

## Prerequisites
* **Recommended:** A basic understanding of using terminal
* **Required:** Access to a Cloud Pak for Data instance running at least version 2.5

## Agenda
* Exploring IBM Cloud Pak for Data
* What is IBM Watson
* Setup and installation
* Hands on Workshop
* Wrap-up

Let's get started!
