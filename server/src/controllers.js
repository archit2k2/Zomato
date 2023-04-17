const { User } = require("./models")

const login = async (req,res)=> {
    const {email, password} = req.body;

    let user = await User.findOne({email});

    if(user)
    {
        if(user.authenticate(password))
        {
            user.salt = undefined;
            user.ency_password = undefined;

            return res.json({msg: "Login Successful", user : user.email})
        }
        else
        {
            return res.json({msg: "password incorrect.."})
        }
    }
    else
    {
        return res.json({msg: "No Such User Found!"})
    }

}

const get_profile = async (req,res) => {
    const email = req.query.email;

    let user = await User.findOne({email});
    
    if(!user)
    {
        return res.json({msg: "User Not Found"});
    }

    const profile = {
        first_name: user.first_name,
        last_name: user.last_name,
        mobile: user.mobile,
        address: user.address,
        email: user.email
    }

    return res.json({msg: "cart returned", profile});
}

const get_name = async (req,res) => {
    const email = req.query.email;

    let user = await User.findOne({email});
    
    if(!user)
    {
        return res.json({msg: "User Not Found"});
    }

    return res.json({msg: "cart returned", name:user.first_name});
}

const get_address = async (req,res) => {
    const email = req.query.email;

    let user = await User.findOne({email});
    
    if(!user)
    {
        return res.json({msg: "User Not Found"});
    }

    return res.json({msg: "address returned", address:user.address});
}

const signup = async (req, res) => {
    const { first_name, last_name, email, address, mobile, password } = req.body;
    let user = await User.findOne({email});

    if (user) {
        return res.json({msg:"user already exist"})
    }

    user = await User.create({
                    first_name,
                    last_name,
                    email,
                    mobile,
                    address,
                    password,
                })
    
    user.salt = undefined;
    user.ency_password = undefined;
    
    return res.json({msg: "user created"});

    
}

const update_profile = async (req,res)=> {
    const { first_name, last_name, email, mobile, address } = req.body;

    let user = await User.findOne({email});

    user.first_name = first_name;
    user.last_name = last_name;
    user.mobile = mobile;
    user.address = address;

    user.salt = undefined;
    user.ency_password = undefined;

    User.findByIdAndUpdate(user._id, user,
                        (err) => {
        if (err)
        {
            return res.json({msg: "Error occured"});
        }
        else
        {
            return res.json({msg: "Profile Updated"});
        }
    });
}

const reset = async (req,res) => {
    const { email, password, newPassword, confirmPassword } = req.body;

    let user = await User.findOne({email});

    if(user.authenticate(password))
    {
        if( newPassword === confirmPassword )
        {
            user.password = newPassword;
            user.save();
            return res.json({msg: "Password Changed Successfully"});
        }
        else
        {
            return res.json({msg: "Password mismatched"});
        }
    }
    else
    {
        return res.json({msg: "password incorrect.."})
    }
}

const cart = async (req,res) => {
    
    const { email, id, name, price, count } = req.body;
    let flag=1;

    let user = await User.findOne({email});

    user.cart.map((item) => {
        
            if(item.id===id)
            {
                flag=0;
                item.count=item.count+count;
            }
    })

    if(flag)
    {
        user.cart = [ ...user.cart, {id, name, price, count} ]
    }

    user.salt = undefined;
    user.ency_password = undefined;

    User.findByIdAndUpdate(user._id, user,
        (err) => {
    if (err)
    {
    return res.json({msg: "Error occured"});
    }
    else
    {
    return res.json({msg: "added to cart"});
    }
    });
}

const delete_item = async (req,res) => {
    const { email, id } = req.body;

    let user = await User.findOne({email});

    user.cart.map((item) => {
        
        if(item.id===id)
        {
            item.remove();
        }
    })

    user.salt = undefined;
    user.ency_password = undefined;

    User.findByIdAndUpdate(user._id, user,
        (err) => {
    if (err)
    {
    return res.json({msg: "Error occured"});
    }
    else
    {
    return res.json({msg: "cart updated"});
    }
    });
}

const empty_cart = async (req,res) => {
    const { email } = req.body;

    let user = await User.findOne({email});

    user.cart.map((item) => {
        item.remove();
    })

    user.salt = undefined;
    user.ency_password = undefined;

    User.findByIdAndUpdate(user._id, user,
        (err) => {
    if (err)
    {
    return res.json({msg: "Error occured"});
    }
    else
    {
    return res.json({msg: "added to cart"});
    }
    });
}

const get_cart = async (req,res) => {
    const email = req.query.email;

    let user = await User.findOne({email});
    
    if(!user)
    {
        return res.json({msg: "User Not Found"});
    }
    return res.json({msg: "cart returned", cart : user.cart});
}

const order = async (req,res) => {
    const { email, cart, amount } = req.body;

    let user = await User.findOne({email});

    user.order = [ ...user.order,  { items: cart, amount }  ];

    User.findByIdAndUpdate(user._id, user,
        (err) => {
    if (err)
    {
        return res.json({msg: "Error occured"});
    }
    else
    {
        return res.json({msg: "Order Placed"});
    }
    });
}

const get_order = async (req,res) => {
    const email = req.query.email;

    let user = await User.findOne({email});
    
    if(!user)
    {
        return res.json({msg: "User Not Found"});
    }
    return res.json({msg: "order returned", order : user.order});
}


module.exports = { login, get_profile, signup, update_profile, reset, cart, delete_item, empty_cart, get_cart, get_name, get_address, order, get_order };