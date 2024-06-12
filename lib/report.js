const config = require('./config');
const axios = require('axios');
const https = require('https');
const fs = require('fs'); //Importing fs module to interact with file system
const FormData = require('form-data'); // Importing form-data module to construct http request with form data to handle file upload
class report {
    constructor() {
        this.outputFile = config.outputFile;
        this.token = config.token;
        this.reportPortalImportApi = config.reportPortalImportApi;
        this.artifactsApi = config.artifactsApi;
        this.agent = new https.Agent(config.agentOptions);
    }

    async fetchArtifact() {
        try {
            const response = await axios.get(this.artifactsApi, {
                httpsAgent: this.agent
            });
            const responseData = response.data;
            await fs.promises.writeFile(this.outputFile, responseData);
            console.log('File has been written successfully');
        } catch (error) {
            console.error('Error fetching or writing artifact:', error);
            throw error;
        }
    }


    async uploadFile() {
        try {
            const fileStream = fs.createReadStream(this.outputFile); //createReadStream method is creating a readable stream from the report file at the specified path and assigning to variable 'filestream'
            const formData = new FormData(); //Here we are creating object of the FormData class which is part of form-data module.This object will be used to construct the payload of the HTTP request including the file data.
            formData.append('file', fileStream); //This line appends a field named 'file' to the FormData object. The second parameter fileStream is the readable stream created from the file. This attaches the file data to the form data under the field name 'file'.
            const response = await axios.post(this.reportPortalImportApi, formData, {
                httpsAgent: this.httpsAgent,
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'multipart/form-data'
                },
            });
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async processArtifactAndUpload() {
        try {
            const filePath = await this.fetchArtifact();
            const responseData = await this.uploadFile();
            console.log('File uploaded successfully:', responseData);
        } catch (error) {
            console.error('File upload failed:', error);
        }
    }
}

module.exports = new report();