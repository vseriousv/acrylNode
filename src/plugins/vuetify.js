import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#fedd0e',
                onPrimary: '#1f1f20',
                secondary: '#fedd0e',
                onSecondary: '#1f1f20',
                error: '#e60d2e',
                onError: 'e60d2e',
                surface: '#ffffff',
                onSurface: '#1f1f20',
                secondSurface: '#3C3C40',
                onSecondSurface: '#ffffff',
                background: '#fbfbfb',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            }
        }
    }
});