



main_style =  `
                .table-container {
                  background: #01A4E8;
                  width: 90vw;
                  height: 10vh;
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                }
                .table-data {
                  background: #ff9800;
                  width: 20%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: left;
                }
                .table-status {
                  background: #f44336;
                  width: 40%;
                  height: 100%;
                  padding: 0 5px 0 5px;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  color:#FFFFFF;
                }
                .table-actions {
                  background: #000000;
                  width: 40%;
                  height: 100%;
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  padding-right: 2%;
                }
                .table-actions>i {
                  margin: 5px;
                  cursor: pointer;
                  font-size: 1.5rem;
                  color: #FFFFFF;
                }
                .table-actions>i:last-child {
                  color: #FDD835;
                  margin-left:10%;
                }
                .table-actions>i:hover {
                  color: #F57C00;
                }
                /* SLIDER */
                /* The switch - the box around the slider */
                .switch {
                  position: relative;
                  display: inline-block;
                  width: 60px;
                  height: 34px;
                }
                /* Hide default HTML checkbox */
                .switch input {
                  opacity: 0;
                  width: 0;
                  height: 0;
                }
                /* The slider */
                .slider {
                  position: absolute;
                  cursor: pointer;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background-color: #43A047;
                  -webkit-transition: .4s;
                  transition: .4s;
                }
                .slider:before {
                  position: absolute;
                  content: "";
                  height: 26px;
                  width: 26px;
                  left: 4px;
                  bottom: 4px;
                  background-color: white;
                  -webkit-transition: .4s;
                  transition: .4s;
                }
                input:checked+.slider {
                  background-color: #ef5350;
                }
                input:focus+.slider {
                  box-shadow: 0 0 1px #ef5350;
                }
                input:checked+.slider:before {
                  -webkit-transform: translateX(26px);
                  -ms-transform: translateX(26px);
                  transform: translateX(26px);
                }
                /* Rounded sliders */
                .slider.round {
                  border-radius: 34px;
                }
                .slider.round:before {
                  border-radius: 50%;
                }
`;






module.exports = main_style;
