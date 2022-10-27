import Document, {Head, NextScript, Main, Html} from "next/document";
import Script from "next/script";

class MyDocument extends Document{


    render(){
        return(
            <Html>
                <Head>



                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument;
