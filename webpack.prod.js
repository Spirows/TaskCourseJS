

/**
 * Archivo de configuracion de webpack
 */


//Importacion de paquetes

//  HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

//CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//CSS Minificador
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

//Imagenes
const CopyPlugin = require("copy-webpack-plugin");

module.exports={

    /**
     * Webpack necesita :
     * Modo : modo que operacion
     * Entrada: Archivo que inicia la app.js
     * Salida: Donde quedara y como ese archivo
     */


    mode: 'production',

    //Optimizador y minificador de CSS
    optimization: {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
      },

    entry:{
        app: './src/index.js'

        /**
         * Para dar soporte a navegadores que no soportan el fetch
         * Se puede instalar babel polyfill
         * 
         * npm i -D @babel/polyfill
         * 
         * Luego, cambiar => app:'./src/index.js' 
         * a => app: ["@babel/polyfill", "./src/index.js"],
         * 
         * De esta manera se dice que debe ocupar polyfill a babel
         */
    },

    output:{
        //Nombre de salida del archivo principal con hash
        filename: 'main.[contenthash].js'
    },

    //Configuracion del modulo
    module: {

        //Reglas del modulo segun sus paquetes
        rules:[

            //Reglas de babel
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: ["babel-loader"]
            },
            
             //reglas del loader-html
             {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                }
             },


             

             {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
               
            },
            {
                test: /styles\.css$/,


                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],  
                
                
            },

            //Copy unique img
            {
                test: /\.(png|jpe?g|gif)$/,
                type: 'asset/inline',
            },
            
                      
        ],
    },
    

    //Se colocan los paquetes y sus configuraciones
    plugins:[

        //Plugin Html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            minify: false,
            //Dejar el script al final del body
            scriptLoading: "blocking"
        }),

        //Plugin Css
        new MiniCssExtractPlugin({
           
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),

        //Plugin Imagen
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets" },
            ],
          }),
    ]







}


