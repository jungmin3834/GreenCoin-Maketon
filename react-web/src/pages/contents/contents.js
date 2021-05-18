import React, { useEffect, useState } from 'react';

//css
import styled from "styled-components"

// contents
import Header from '../../components/header/header';
import Navbar from '../../components/navbar/navbar';

// modules
import InsertComma from '../../commonModules/insertComma';

// img
import Share from '../../img/contents/share@3x.png';
import SkewRec from '../../img/contents/skewRec@3x.png';
import Arrow from '../../img/icon/arrow@3x.png';
import Pig from '../../img/contents/pig@3x.png';

const Contents = (props) => {

    const [currentStep, setCurrentStep] = useState(0);
    const [currentKg, setCurrentKg] = useState(0);
    const [currentDataArr, setCurrentDataArr] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const [historyData, setHistoryData] = useState([]);

    useEffect(() => {
        setCurrentDataArr([
            {title: "칼로리", content:1000},
            {title: "줄인 탄소", content:1000},
            {title: "거리", content:1000},
        ]);

        setGraphData([150, 114, 69, 82, 119, 40, 146]);

        setHistoryData([
            {date:"2020.00.00", price:500, desc:"적립", current:550},
            {date:"2020.00.00", price:500, desc:"적립", current:550},
            {date:"2020.00.00", price:500, desc:"적립", current:550},
            {date:"2020.00.00", price:500, desc:"적립", current:550},
        ])
    }, [])

    const onClickBar = () =>{
        console.log("onClickBar");
    }

    const onClickRight = () =>{
        console.log("onClickRight");
    }

    const onClickLeft = () =>{
        console.log("onClickLeft");
    }


    return(
        <ContentsWrap>
            <Header />
            
            {/* 만보기 */}
            <StepWrap>
                <ShareImg src={Share} alt="공유하기 아이콘"/>
                <StepTop>
                    <StepText>{currentStep} steps</StepText>
                    <KgText>{currentKg} kg</KgText>
                    <SkewRecImg src={SkewRec} alt="직사각형"/>
                </StepTop>

                <StepBottom>
                    {
                        currentDataArr.map((item, index) => {
                            console.log(index);
                            return(
                                <StepBottomEl key={index}>
                                    <StepBottomTitle>{item.title}</StepBottomTitle>
                                    <StepBottomContent>{InsertComma(item.content)}</StepBottomContent>
                                </StepBottomEl>
                            )
                        })
                    }
                </StepBottom>
            </StepWrap>
                
            {/* 그래프 */}
            {/* 거꾸로*/}
            <GraphWrap>
                <DateWrap>
                    <LeftArrow src={Arrow} alt="방향 아이콘" onClick={() => onClickLeft()}/>
                    <DateText>0월</DateText>
                    <RightArrow src={Arrow} alt="방향 아이콘" onClick={() => onClickRight()}/>
                </DateWrap>

                <GraphCanvas>
                    <GraphLine style={{bottom:"38px"}}/>
                    <GraphLine style={{bottom:"77px"}}/>
                    <GraphLine style={{bottom:"116px"}}/>
                    <GraphLine style={{bottom:"154px"}}/>
                    <GraphBarGroup>
                        {
                            graphData.map((item, index) => {
                                return(
                                    <GraphBar onClick={() => onClickBar()} style={{height:`${item}px`}}></GraphBar>
                                )
                            })
                        }
                    </GraphBarGroup>
                </GraphCanvas>
                <GraphText>
                    <span>월</span>
                    <span>화</span>
                    <span>수</span>
                    <span>목</span>
                    <span>금</span>
                    <BlueText>토</BlueText>
                    <RedText>일</RedText>
                </GraphText>
            </GraphWrap>
            
            {/* 그래프 텍스트 */}
            <GraphData>
                <GraphDataTop>
                    <SelectDate>0000년 0월 0일</SelectDate>
                    <DateCoin>150 그린코인 적립됨</DateCoin>
                </GraphDataTop>
                <GraphDataBottom>
                    <GraphDataText><GreenText>00.00kg</GreenText> 의 탄소 감소</GraphDataText>
                    <GraphDataText><GreenText>00km</GreenText> 걷고</GraphDataText>
                    <GraphDataText><GreenText>0000kcal</GreenText> 소비 하였습니다.</GraphDataText>
                </GraphDataBottom>
            </GraphData>
            
            {/* 내역 */}
            <CoinHistory>
                <HistoryTop>
                    <PigImg src={Pig} alt="돼지 아이콘"/>
                    <HistoryTitle>나의 그린코인 적립 및 지역 화폐 전환 내역</HistoryTitle>
                    <MoreBtn>더보기 +</MoreBtn>
                </HistoryTop>

                <HistoryTable>
                    <TableTitleWrap>
                        <TableTitle>날짜</TableTitle>
                        <TableTitle>금액</TableTitle>
                        <TableTitle>사용</TableTitle>
                        <TableTitle>보유 코인 잔액</TableTitle>
                    </TableTitleWrap>
                    {
                        historyData.map((item, index) => {
                            return(
                                <TableContentWrap key={index}>
                                    <TableConten>{item.date}</TableConten>
                                    <TableConten>{item.price}코인</TableConten>
                                    <TableConten>{item.desc}</TableConten>
                                    <TableConten>{item.current}코인</TableConten>
                                </TableContentWrap>
                            )
                        })
                    }
                
                </HistoryTable>
            </CoinHistory>

            {/* 교환 버튼 */}
            <ChangeBtn>
                지역화폐로 교환하기
            </ChangeBtn>
            <Navbar />
        </ContentsWrap>
    )
};

export default Contents;

const ContentsWrap = styled.div`
    margin-top:133px;
    padding:15px;
    margin-bottom:80px;
`
const StepWrap = styled.div`
    /* width:397px; */
    /* height: 324px; */
    border:1px solid #EDEDED;
    border-radius: 10px;
    position:relative;
    margin-bottom:34px;
`
const ShareImg = styled.img`
    position:absolute;
    top:20px;
    right:20px;
    width:21px;
    height: 21px;
`

// -- StepTop
const StepTop = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    height: 172px;
`
const StepText = styled.p`
    font-size: 22px;
    color:#505050;
    font-size:500;
`
const KgText = styled.p`
    font-size: 38px;
    color:#00C386;
    z-index:1;
    font-size:500;
`
const SkewRecImg = styled.img`
    width:208px;
    height: 10px;
    margin-top:-5px;
    z-index:0;
`

// -- StepTop
const StepBottom = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const StepBottomEl = styled.div`
    width:33%;
    height: 118px;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    border-left:1px solid #D9D9D9;
    margin-bottom:13px;
    &:first-child {
        border-left:0px;
    }
`
const StepBottomTitle = styled.div`
    font-size:13px;
    color:#7B7B7B;
    margin-bottom:13px;
    font-size:500;
`
const StepBottomContent = styled.div`
    font-size:20px;
    color:#505050;
    font-size:500;
`

// Graph
const GraphWrap = styled.div`
    width:100%;
    height: 285px;
    position:relative;
    margin-bottom:38px;
    padding:0 22px;
`
const DateWrap = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:83px;
`
const DateText = styled.p`
    font-size:20px;
    color:#505050;
    font-weight:500;
    margin:0 32px;
`
const RightArrow = styled.img`
    width:6px;
    height: 10px;
`
const LeftArrow = styled.img`
    width:6px;
    height: 10px;
    transform: rotate(180deg);
`

const GraphCanvas = styled.div`
    width:100%;
    height: 155px;
    border-bottom:1px solid #D9D9D9;
    position:relative;
`

const GraphLine = styled.div`
    width:100%;
    height: 1px;
    border-bottom:1px solid #F5F5F5;
    position:absolute;
    z-index:0;
`

const GraphBarGroup = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
`
const GraphBar = styled.div`
    width:14px;
    background-color:#E8E8E8;
    z-index:1;
`


const GraphText = styled.p`
    width:100%;
    font-size:15px;
    font-weight:500;
    color:#7B7B7B;
    display:flex;
    justify-content:space-around;
    margin:11px 0 30px;
`
const BlueText = styled.span`
    color:#0033BF;
`
const RedText = styled.span`
    color:#C60000;
`


const GraphData = styled.div`
    width:100%;
    border:1px solid #EDEDED;
    border-radius:10px;
    margin-bottom:30px;
`
const GraphDataTop = styled.div`
    margin:13px 27px 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const SelectDate = styled.p`
    font-size:12px;
    font-weight:400;
`
const DateCoin = styled.p`
    font-size:11px;
    width:125px;
    height:26px;
    background-color:#00C386;
    color:#fff;
    border-radius:13px;
    text-align:center;
    line-height:26px;
    font-weight:500;
`
const GraphDataBottom = styled.div`
    margin: 12px 27px 27px;
`
const GraphDataText = styled.p`
    font-size:14px;
    font-weight:700;
    color:#505050;
    margin-top:17px;
`
const GreenText = styled.span`
    color:#66D8B9;
`

// History
const CoinHistory = styled.div`
    width:100%;
    margin-bottom:39px;
`

const HistoryTop = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin-bottom:17px;
`
const PigImg = styled.img`
    width:22px;
    height:22px;
    margin-right:11px;
`
const HistoryTitle = styled.p`
    font-size:15px;
    color:#505050;
    font-weight:700;
    margin-right:50px;
`
const MoreBtn = styled.div`
    font-size:11px;
    color:#505050;
    font-weight:400;
`
const HistoryTable = styled.div`

`
const TableTitleWrap = styled.div`
    height:36px;
    background-color:#F8F7F7;
    display:flex;
    align-items:center;
`
const TableTitle = styled.span`
    width:25%;
    text-align:center;
    font-size:12px;
    font-weight:400;
    color:#505050;
`
const TableContentWrap = styled.div`
    height:36px;
    display:flex;
    align-items:center;
    border-bottom:1px solid #E6E6E6;
`
const TableConten = styled.span`
    width:25%;
    text-align:center;
    font-weight:400;
    font-size:12px;
`

const ChangeBtn = styled.button`
    width:100%;
    height:66px;
    background-color:#66D8B9;
    border:3px solid #F8F7F7;
    color:#FFF;
    font-size:20px;
    font-weight:700;
    border-radius:10px;
`