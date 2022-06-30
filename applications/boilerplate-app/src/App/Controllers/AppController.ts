import {
    CornerRadiusTypes,
    cTopLeading,
    ForEach,
    HStack,
    Icon,
    IconLibrary,
    IconType,
    ScrollView,
    Text,
    UIController,
    UIScene,
    VStack,
    cVertical,
    PositionTypes,
    Color,
    Cache,
    UIButton,
    State,
    cTop
} from '@tuval/forms';
import { TForm, cLeading } from '@tuval/forms';




export class AppController extends UIController {

    @State()
    private menu_text: string;

    protected InitController() {
       this.menu_text  = 'About';
    }

    public OnBindModel(form: TForm) {

    }
    public LoadView() {
        return UIScene(
            VStack({alignment:cTop})(
                HStack({spacing:10})(
                    Text(this.menu_text).cornerRadius(10).background({hover:'#EEE'}).padding(5)
                    .onClick(()=> this.menu_text =  'New About'),
                    Text('Test').cornerRadius(10).background({hover:'#EEE'}).padding(5),
                    Text('For').cornerRadius(10).background({hover:'#EEE'}).padding(5)
                )
                .height()
                .cursor('pointer')
                .background('white')
                .shadow('0 1px 2px hsla(0,0%,0%,0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05), 0 2px 8px hsla(0, 0%, 0%, 0.05)')
            )

        )
    }
}