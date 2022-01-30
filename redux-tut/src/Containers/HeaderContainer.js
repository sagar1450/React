import React, { useState, useEffect } from "react";
import {connect} from 'react-redux'
// import { addToCart } from "../Services/Action/action";
import Header from "../Components/Header";

const mapStateToProps=state=>({
cardData:state.cardItems
})

const mapDispatchToProps=dispatch=>({
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)