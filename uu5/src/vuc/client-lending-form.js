import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import Calls from "calls"

export default React.createClass({

    mixins:[
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.RouteMixin,
        UU5.Common.LoadMixin,
        UU5.Forms.FormMixin
    ],

    statics:{
        tagName:Cfg.APP + ".AddLending",
        classNames:{
            main:Cfg.CSS + "-add-lending"
        },
        calls:{
            onLoad: "loadLendingsForClient",
            find: "findAvailableVehicles",
            create: "addLending",
        }
    },

    componentWillMount(){
        this.setCalls(Calls)
    },

    _getClients(){
        return this.getLoadFeedbackChildren(this._handleLoadedClients) || []
    },

    getInitialState(){
        return {
            showForm:false,
            clients: null
        }
    },

    _formSend(){
        let formData1 = this._addForm.getValues();
        let formData2 = this._filterForm.getValues();
        let lendTo = formData2.lendTo;
        let lendFrom = formData2.lendFrom;
        let vehicleId = formData1.car;
        let price = formData1.price;
        let latitude = formData1.latitude;
        let longitude = formData1.longitude;
        let clientId = this.props.clientID;

        console.log({vehicleId, clientId, price, lendFrom, lendTo, latitude, longitude})
        // hide form and show loading
        this.setState({
            loadFeedback:"loading",
            showForm:false
        }, () =>{
            this.getCall("create")({
                data:{vehicleId, clientId, price, lendFrom, lendTo, latitude, longitude},
                done:() =>{
                    this.reload()
                },
                fail:(response) => console.error(response)
            })
        })

        // clear up reference
        this._addForm = undefined
    },


    _handleFormFirstReference(form){
        this._filterForm = form
    },

    _handleFormSecondReference(form){
        this._addForm = form
    },

    getOnLoadData_() {
        return {
            clientID: this.props.clientID
        }
    },

    _getCars(){
        this.state.showForm = true;
        this.setState({
            loadFeedback:"loading"
        }, () =>{
            this.getCall("find")({
                data:this._filterForm.getValues(),
                done:(data) =>{
                    this.setState({
                        dtoOut:data,
                        loadFeedback:"ready",
                    })
                },
                fail:(response) => console.error(response)
            })
        })
    },


    _handleLoadedClients(data){
        if(this.state.showForm == false){
            this.state.clients = data;
        } else if(this.state.showForm == true){
            if(!data || data.length === 0){
                return <UU5.Bricks.P>Není tu žádné vozidlo</UU5.Bricks.P>
            }

            let cars = data.map((car) => (
                <UU5.Forms.Select.Option value={car.id+""} content={car.vin + (car.nickname !== undefined ? " ("+car.nickname +")" : "")} key={car.id}/>
            ));
            return (
                <UU5.Bricks.Panel header="Upřesnění" alwaysExpanded={true} disableHeaderClick={true}>
                    <UU5.Forms.BasicForm ref_={this._handleFormSecondReference}>
                        <UU5.Forms.Select label="Vozidlo" name="car">
                            {cars}
                        </UU5.Forms.Select>
                        <UU5.Forms.Text name="latitude" label="Latitude" value="50.124" required/>
                        <UU5.Forms.Text name="longitude" label="Longitude" value="15.004" required/>
                        <UU5.Forms.Text name="price" value="110000" label="Cena"/>
                    </UU5.Forms.BasicForm>
                    <UU5.Bricks.Button colorSchema="primary" onClick={this._formSend}>Přidat zápůjčku</UU5.Bricks.Button>
                </UU5.Bricks.Panel>
            )
        }
    },


    render(){
        return (
            <UU5.Bricks.Div {...this.getMainPropsToPass()}>
                <UU5.Bricks.Panel header="Přidání nové zápůjčky" alwaysExpanded={true} disableHeaderClick={true}>
                    <UU5.Forms.BasicForm ref_={this._handleFormFirstReference}>
                        <UU5.Forms.Select label="Typ" name="type" placeholder="Vyberte typ vozidla">
                            <UU5.Forms.Select.Option value="BULLDOZER"/>
                            <UU5.Forms.Select.Option value="TRACTOR"/>
                            <UU5.Forms.Select.Option value="DREDGING"/>
                            <UU5.Forms.Select.Option value="EXCAVATOR"/>
                            <UU5.Forms.Select.Option value="RECLAIMER"/>
                            <UU5.Forms.Select.Option value="SKIDDER"/>
                            <UU5.Forms.Select.Option value="LOADER"/>
                            <UU5.Forms.Select.Option value="FORKLIFT"/>
                            <UU5.Forms.Select.Option value="DUMP_TRUCK"/>
                            <UU5.Forms.Select.Option value="ROAD_ROLLER"/>
                            <UU5.Forms.Select.Option value="TRACKED_LOADER"/>
                        </UU5.Forms.Select>
                        <UU5.Forms.Datepicker name="lendFrom" label="Datum zápůjčení"/>
                        <UU5.Forms.Datepicker name="lendTo" label="Datum vrácení" />
                    </UU5.Forms.BasicForm>
                    <UU5.Bricks.Button colorSchema="primary" onClick={this._getCars} >Zobrazit dostupná vozidla</UU5.Bricks.Button>
                </UU5.Bricks.Panel>
                {this.getLoadFeedbackChildren(this._handleLoadedClients)}
            </UU5.Bricks.Div>
        );
    }
});