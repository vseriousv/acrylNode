<template>
    <section class="map-block">
        <v-container class="d-flex flexOptionContaner mxw1200">
            <v-row class="addressRowSection d-none d-sm-flex">
                <v-col class="d-flex addressSection">
                    <p>{{addressItems.city}}</p>
                    <p>{{addressItems.address}}</p>
                    <p>{{addressItems.number}}</p>
                    <p>{{addressItems.email}}</p>
                </v-col>
            </v-row>
            <v-row class="buttonRowSection">
                <v-col class="d-flex buttonSection">
                    <v-btn rounded color="primary secondaryColor">{{button}}</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: 'MapBlock',
    props: ['addressItems'],
    data(){
        return{
            button: "Подпишитесь на рассылку"
        }
    }    
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.map-block{
    width: 100%;
    height: 480px;
    display: flex;
    background-image: url(/img/mapOffice.png);
    background-position: center;
    background-size: auto;
    .flexOptionContaner{
        flex-direction: column;
        .addressRowSection{
            .addressSection{
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-end;
                p{
                    text-align: right;
                    color: white;
                    padding: 0;
                    margin: 0 20px 0 0;
                }
            }
        }
        .buttonRowSection{
            height: 50px;
            .buttonSection{
                align-items: flex-end;
                justify-content: center;
            }
        }
    }
}

</style>