/** @odoo-module */

import { registry } from "@web/core/registry"
const { Component, useState } = owl
const { onWillStart, onMounted, onWillUnmount } = owl.hooks
import { loadJS } from "web.ajax"
import { useEffect } from "@web/core/utils/hooks"
import { DatePicker, DateTimePicker } from "@web/core/datepicker/datepicker"
const { DateTime } = luxon;

export class UsingDateTimePicker extends Component {
    setup(){
        this.state = useState({
            date: ""
        })
        this.date = DateTime.local()
        this.minDate = DateTime.fromObject({
            year: 2023,
            month: 11,
            day: 5,
        })
        /*onWillStart(async ()=>{
            await loadJS("https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js")
        })*/

        useEffect(()=>{
            console.log("date", this.state.date)
        }, ()=>[this.state.date])

        onMounted(()=>{
            $('#datetimepicker3').datetimepicker({
                format: 'LT'
            });
        })

        /*onWillUnmount(()=>{
            const old_datetime = document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js"]')

            if (old_datetime){
                setTimeout(()=>[
                    location.reload()
                ], 100)
            }
        })

        onMounted(()=>{
            var self = this
            $(function () {
              $.datetimepicker.setDateFormatter({
                parseDate: function (date, format) {
                  var d = moment(date, format);
                  return d.isValid() ? d.toDate() : false;
                },

                formatDate: function (date, format) {
                  return moment(date).format(format);
                },

                //Optional if using mask input
                formatMask: function (format) {
                  return format
                    .replace(/Y{4}/g, "9999")
                    .replace(/Y{2}/g, "99")
                    .replace(/M{2}/g, "19")
                    .replace(/D{2}/g, "39")
                    .replace(/H{2}/g, "29")
                    .replace(/m{2}/g, "59")
                    .replace(/s{2}/g, "59");
                }
              });
              $("#dtVendor").datetimepicker({
                format: "DD.MM.YYYY h:mm a",
                minDate: "05/11/2023",
                formatTime: "h:mm a",
                formatDate: "DD.MM.YYYY"
              })
              .on('change', function(e){
                self.state.date = e.target.value
              });
            });
        })*/
    }

    onDateChange(e){
        this.state.date = e.detail.date.toFormat('D')
    }

    onDateTimeChange(e){
        this.state.date = e.detail.date.toFormat('dd/MM/yyyy hh:mm:ss')
    }
}

UsingDateTimePicker.template = "UsingDateTimePicker"
UsingDateTimePicker.components = { DatePicker, DateTimePicker }
registry.category("actions").add("action_datetime_picker", UsingDateTimePicker)