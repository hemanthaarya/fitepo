import React from 'react';
import styled from 'styled-components';
import { FiBox,FiAlignJustify,FiChevronRight,FiShoppingCart,FiHelpCircle,FiUsers,FiDollarSign,FiArrowUpCircle,FiArrowUp,FiArrowDown} from "react-icons/fi";
import {BsWallet2} from "react-icons/bs";
import {CgNotes} from "react-icons/cg";
import {BiShoppingBag} from "react-icons/bi"
import './project.css';

const Container=styled.div`
  width:100vw;
  display:flex;
  flex-direction:row;
  background-color:#f9f7fa;
`

const SideBar=styled.div`
    background-color:#0b0252;
    width:250px;
    height:120vh;
`
const TitleContainer=styled.div`
    display:flex;
    flex-direction:row;  
    margin-left:10px;  
`
const Title=styled.h1`
    font-size:30px;
    color:white;
    text-align:center;
    margin-top:15px;
    font-family: sans-serif,Helvetica;
    margin-left:5px;
`
const SubTitleContainer=styled.div`
  border:2px solid transparent;
  margin-top:30px;
  

`
const DashBoardContainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border:2px solid transparent;
  border-radius:5px;
  background-color:#766eb5;
  height:35px;
  width:85%;
  margin:auto;
  margin-bottom:15px;
  cursor:pointer;
`
const SubTitle1=styled.h3`
  font-size:20px;
  color:white;
  margin-top:5px;
  font-family: sans-serif,Helvetica;
`
const ProductContainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border:2px solid transparent;
  border-radius:5px;
  height:35px;
  width:85%;
  margin:auto;
  margin-bottom:15px;
  cursor:pointer;
  opacity:0.5;
`
const CostumerContainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border:2px solid transparent;
  border-radius:5px;
  height:35px;
  width:85%;
  margin:auto;
  margin-bottom:15px;
  cursor:pointer;
  opacity:0.5;
`
const IncomeContainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border:2px solid transparent;
  border-radius:5px;
  height:35px;
  width:85%;
  margin:auto;
  margin-bottom:15px;
  cursor:pointer;
  opacity:0.5;
`
const PromoteContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border:2px solid transparent;
  border-radius:5px;
  height:35px;
  width:85%;
  margin:auto;
  margin-bottom:15px;
  cursor:pointer;
  opacity:0.5;
`
const HelpContainer=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  border:2px solid transparent;
  border-radius:5px;
  height:35px;
  width:85%;
  margin:auto;
  margin-bottom:15px;
  cursor:pointer;
  opacity:0.5;
`
const AccountContainer=styled.div`
  margin-top:350px;
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  margin-left:10px;
  margin-right:10px;
  background-color:#766eb5;
  border-radius:5px;
  height:60px;

`
const ImgContainer=styled.img`
  border-radius:50%;
  width:50px;
  height:50px;
  margin-top:5px;

`
const DetailsCOntainer=styled.div`
  display:flex;
  flex-direction:column;
  margin-left:10px;
`
const Name=styled.h5`
  color:white;
  margin-top:15px;
  font-family: sans-serif,Helvetica;

`
const Role=styled.h5`
  color:white;
  margin-top:-25px;
  font-family: sans-serif,Helvetica;
  opacity:0.6;
`
const Main=styled.div`
`
const InputContainer=styled.div`
  display:flex;
  flex-direction:row;

  

`
const Nme=styled.h2`
  font-family: sans-serif,Helvetica;
  margin-left:5px;

`
const Input=styled.input`
  height:25px;
  width:200px;
  border-radius:5px;
  margin-left:850px;
  margin-top:20px;

`
const Section=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;

` 
const Section1=styled.div`
  border-radius:10px;
  background-color:white;
  width:300px;
  display:flex;
  flex-direction:row;

` 
const Img=styled.div`
  border-radius:50%;
  background-color:#9bf285;
  width:100px;
  height:100px;
  margin-top:28px;
  margin-left:15px;


` 
const NameContainer=styled.div`
  width:150px;
  height:150px;
  margin-left:15px;
  font-family: sans-serif,Helvetica;

` 
const P1=styled.p`
  font-size:15px;
  margin-top:20px;

` 
const H1=styled.h1`

` 
const P2=styled.p`
  color:green;

` 
const Section2=styled.div`
  border-radius:10px;
  background-color:white;
  width:250px;
  display:flex;
  flex-direction:row;
` 
const Section3=styled.div`
  border-radius:10px;
  background-color:white;
  width:250px;
  display:flex;
  flex-direction:row;
` 
const Section4=styled.div`
  border-radius:10px;
  background-color:white;
  width:250px;
  display:flex;
  flex-direction:row;

` 
const Aside=styled.div`
  margin-top:30px;
  display:flex;
  flex-direction:row;

`
const OverviewContainer=styled.div`
  background-color:white;
  border-radius:10px;
  width:800px;
  height:430px;
  margin-left:40px;


`
const TitlesContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`
const GraphContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;

`
const RectangleContainer1=styled.div`
  margin-top:85px;

`
const RectangleContainer2=styled.div`
  margin-top:135px;
`
const RectangleContainer3=styled.div`
  margin-top:40px;
`
const RectangleContainer4=styled.div`
  margin-top:50px;
`
const RectangleContainer5=styled.div`
  margin-top:50px;
`
const RectangleContainer6=styled.div`
  margin-top:180px;
`
const RectangleContainer7=styled.div`
  margin-top:50px;
`
const RectangleContainer8=styled.div`
  margin-top:30px;

`
const RectangleContainer9=styled.div`
  margin-top:40px;
`
const RectangleContainer10=styled.div`
  margin-top:70px;
`
const RectangleContainer11=styled.div`
  margin-top:60px;
`
const RectangleContainer12=styled.div`
  margin-top:50px;
`
const Rectangle=styled.div`
  background-color:#f0dff5;
  margin-left:10px;
  border-radius:10px;
  `

const CustomerContainer=styled.div`
  background-color:white;
  border-radius:10px;
  margin-left:15px;
  width:340px;

`
const CircleContainer=styled.div`

`
const Footer=styled.div`
  background-color:white;
  border-radius:10px;
  margin-left:34px;
  margin-Right:34px;
  margin-top:20px;

`
const TContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`
const SubTitlesContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`
const ProductsContainer=styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`


const Project = () => {
  return (
      <Container>
        <SideBar>
        <TitleContainer>
          <FiAlignJustify className='large_icons'/>
          <Title>Dashboard</Title>
        </TitleContainer>
        <SubTitleContainer>
          <DashBoardContainer>
            <FiBox className='small_icons'/>
            <SubTitle1>Dashboard</SubTitle1>
          </DashBoardContainer>
          <ProductContainer>
            <FiShoppingCart className='small_icons'/>
            <SubTitle1>Product</SubTitle1>
            <FiChevronRight style={{marginLeft:'65px'}} className='arrow_icons'/>
          </ProductContainer>
          <CostumerContainer>
            <FiUsers className='small_icons'/>
            <SubTitle1>Costumers</SubTitle1>
            <FiChevronRight style={{marginLeft:'38px'}} className='arrow_icons'/>
          </CostumerContainer>
          <IncomeContainer>
            <FiDollarSign className='small_icons'/>
            <SubTitle1>Income</SubTitle1>
            <FiChevronRight style={{marginLeft:'70px'}} className='arrow_icons'/>
          </IncomeContainer>
          <PromoteContainer>
            <FiArrowUpCircle className='small_icons'/>
            <SubTitle1>Promote</SubTitle1>
            <FiChevronRight style={{marginLeft:'55px'}} className='arrow_icons'/>
          </PromoteContainer>
          <HelpContainer>
            <FiHelpCircle className='small_icons'/>
            <SubTitle1>Help</SubTitle1>
            <FiChevronRight style={{marginLeft:'90px'}} className='arrow_icons'/>
          </HelpContainer>
        </SubTitleContainer>
        <AccountContainer>
          <ImgContainer src='https://media.licdn.com/dms/image/D5603AQFeLN5XEdDYag/profile-displayphoto-shrink_800_800/0/1693357139123?e=2147483647&v=beta&t=btNflzdoXvi06xFZe30PJQ3IRzeHgOTtCPn4Qy_8FwE'/>
          <DetailsCOntainer>
            <Name>Hemanth Kumar</Name>
            <Role>Production Manager</Role>
          </DetailsCOntainer>
          <FiChevronRight style={{marginTop:'20px'}} className='arrow_icons'/>
        </AccountContainer>
        </SideBar>
        <Main>
          <InputContainer>
            <Nme>Hello Rahul👋,</Nme>
            <Input type='text' placeholder='search'/>
          </InputContainer>
          <Section>
            <Section1>
              <Img>
                <div style={{textAlign:"center",fontSize:"50px",color:"green",marginTop:"25px"}}>
                  <FiDollarSign/>
                </div>
              </Img>
              <NameContainer>
                <P1>Earning</P1>
                <H1>$198K</H1>
                <P2><FiArrowUp/>37.8%<span style={{color:"black"}}>this month</span></P2>
              </NameContainer>
            </Section1>
            <Section2>
              <Img style={{backgroundColor:"#c9afde"}}>
                <div style={{textAlign:"center",fontSize:"50px",color:"#8d03fc",marginTop:"25px"}}>
                  <CgNotes/>
                </div>
              </Img>
              <NameContainer>
                <P1>Orders</P1>
                <H1>$2.4K</H1>
                <P2 style={{color:"red"}}><FiArrowDown/>2%<span style={{color:"black"}}>this month</span></P2>
              </NameContainer>
            </Section2>
            <Section3>
              <Img style={{backgroundColor:"#8ad1f2"}}>
                <div style={{textAlign:"center",fontSize:"50px",color:"#0285c2",marginTop:"25px"}}>
                  <BsWallet2/>
                </div>
              </Img>
              <NameContainer>
                <P1>Balance</P1>
                <H1>$2.4K</H1>
                <P2 style={{color:"red"}}><FiArrowDown/>2%<span style={{color:"black"}}>this month</span></P2>
              </NameContainer>
            </Section3>
            <Section4>
              <Img style={{backgroundColor:"#f0bdd7"}}>
                <div style={{textAlign:"center",fontSize:"50px",color:"#fa0202",marginTop:"25px"}}>
                  <BiShoppingBag/>
                </div>
              </Img>
              <NameContainer>
                <P1>Total Sales</P1>
                <H1>$89K</H1>
                <P2><FiArrowUp/>11%<span style={{color:"black"}}>this month</span></P2>
              </NameContainer>
            </Section4>
          </Section>
          <Aside>
            <OverviewContainer>
              <TitlesContainer>
                <div style={{marginLeft:"10px",fontFamily:"sans-serif,Helvetica"}}>
                  <h2>Overview</h2>
                  <p>Monthly earning</p>
                </div>
                <div style={{opacity:"0.5",marginTop:"10px",marginRight:"10px"}}>
                  <select>
                    <option>Quarterly</option>
                  </select>
                </div>

              </TitlesContainer>
              <GraphContainer>
                <RectangleContainer1>
                  <Rectangle style={{height:"200px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Jan</p>

                </RectangleContainer1>
                <RectangleContainer2>
                  <Rectangle style={{height:"150px",width:"50px"}} ></Rectangle>
                  <p style={{marginLeft:"20px"}}>Feb</p>

                </RectangleContainer2>
                <RectangleContainer3>
                  <Rectangle style={{height:"240px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Mar</p>

                </RectangleContainer3>
                <RectangleContainer4>
                  <Rectangle style={{height:"230px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Apr</p>

                </RectangleContainer4>
                <RectangleContainer5>
                  <Rectangle style={{height:"230px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>May</p>

                </RectangleContainer5>
                <RectangleContainer6>
                  <Rectangle style={{height:"100px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Jun</p>

                </RectangleContainer6>
                <RectangleContainer7>
                  <Rectangle style={{height:"230px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Jul</p>

                </RectangleContainer7>
                <RectangleContainer8>
                  <Rectangle style={{height:"250px",width:"50px",backgroundColor:"#561cc9"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Aug</p>

                </RectangleContainer8>
                <RectangleContainer9>
                  <Rectangle style={{height:"240px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Sep</p>

                </RectangleContainer9>
                <RectangleContainer10>
                  <Rectangle style={{height:"210px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Oct</p>

                </RectangleContainer10>
                <RectangleContainer11>
                  <Rectangle style={{height:"220px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Nov</p>

                </RectangleContainer11>
                <RectangleContainer12>
                  <Rectangle style={{height:"230px",width:"50px"}}></Rectangle>
                  <p style={{marginLeft:"20px"}}>Dec</p>

                </RectangleContainer12>

              </GraphContainer>

            </OverviewContainer>
            <CustomerContainer>
              <TitlesContainer>
                <div style={{fontFamily:"sans-serif,Helvetica",marginLeft:"20px",marginBottom:"50px"}}>
                  <h2>Customers</h2>
                  <p>customers that buy products</p>
                </div>

              </TitlesContainer>
              <CircleContainer>
                <div style={{marginLeft:"30px",marginTop:"30px"}}>
                  <div style={{marginBottom:"-660px",marginLeft:"100px"}}>
                      <h1>65%</h1>
                      <p style={{width:"100px"}}>total new customers</p>
                    </div>
                  <svg width={300} height={300} style={{marginTop:"480px"}}>
                    <circle r={100} cx={125} cy={125} className='circle2'></circle>
                    <circle r={100} cx={125} cy={125} className='circle3'>
                    </circle>
                  </svg>
                </div>

              </CircleContainer>

            </CustomerContainer>
          </Aside>
          <Footer>
            <TContainer>
              <h1 style={{marginLeft:"5px",fontFamily: "sans-serif,Helvetica"}}>Product Sell</h1>
              <input style={{marginRight:"-700px",height:"20px",borderRadius:"5px",marginTop:"20px",opacity:"0.5"}} type='text' placeholder='search'/>
              <select style={{height:"25px",borderRadius:"5px",marginTop:"20px",marginRight:"5px",opacity:"0.5"}}>
                <option>last 30 days</option>
              </select>
            </TContainer>
            <SubTitlesContainer>
              <p style={{opacity:"0.5",marginLeft:"5px",fontFamily: "sans-serif,Helvetica"}}>Product Name</p>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"400px"}}>
                <p style={{opacity:"0.5",marginLeft:"5px",fontFamily: "sans-serif,Helvetica"}}>Stock</p>
                <p style={{opacity:"0.5",marginLeft:"5px",fontFamily: "sans-serif,Helvetica"}}>Price</p>
                <p style={{opacity:"0.5",marginRight:"5px",fontFamily: "sans-serif,Helvetica"}}>Total Sales</p>
              </div>

            </SubTitlesContainer>
            <hr style={{opacity:"0.5",marginLeft:"5px",marginRight:"5px"}}/>
            <ProductsContainer>
              <div style={{width:"50px",height:"10px"}}>
                <img style={{borderRadius:"5px"}} src='https://picsum.photos/id/237/80/50'/>
              </div>
              <div style={{width:"500px",height:"90px",fontFamily: "sans-serif,Helvetica",marginLeft:"-140px",marginTop:"-10px"}}>
                <h1 style={{fontSize:"14px"}}>Abstract 3D</h1>
                <p>loreum ipsium dolor sit amet,consecutor asmeic epit elit</p>
              </div>
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"400px",fontFamily: "sans-serif,Helvetica"}}>
                <p>32 in stock</p>
                <p style={{marginLeft:"-40px"}}><b>$ 45.99</b></p>
                <p style={{marginRight:"40px"}}>20</p>
              </div>
            </ProductsContainer>
          </Footer>
        </Main>
      </Container>
  )
}

export default Project;
