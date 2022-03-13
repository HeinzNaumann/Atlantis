import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Alert from '../../common/Alert';



const AccountConfirm = () => {

    const params = useParams();

    console.log(params);
    
    return (
            <>
            <h1>Confirm your account and start to create your adverts</h1>
            </>
    );
}
 
export default AccountConfirm;