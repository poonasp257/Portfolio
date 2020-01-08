import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { CommonLoading } from 'react-loadingg';

import SlideViewer from './SlideViewer';
import animation from 'css/animation';

const OutContainer = styled.section`
    z-index: 1;
    position: relative;
    min-height: 400px;
    padding: 30px 0 80px 0;
    background-color: #121E26; 
    text-align: center;
`;

const InContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1000px;
    height: auto;
    margin: 25px auto;
    line-height: 1.0;
`;

const Header = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
    color: #fafafa;
`;

const HeaderBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #fafafa;
`;

const Loading = styled.div`
    margin: 80px auto;
`;

class Projects extends PureComponent {    
    state = { 
        projects: [],
        done: false
    }

    getProjectInfo() {
        return fetch('data/projects.json')
            .then(response => {
                if(!response.ok) {
                    throw new Error("error code: " + response.status);
                }
                
                return response.json();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    
    componentDidMount() {
        this.getProjectInfo()
            .then(data => {
                this.setState({ 
                    projects: data.projects,
                    done: true 
                });
            });
    }

    render() {
        return (
            <OutContainer id="projects">
                <Header>Works.</Header>
                <HeaderBar/>
                <InContainer>
                    { !this.state.done ? ( 
                        <Loading>
                            <CommonLoading size="large"/>
                        </Loading>
                    ) : this.state.projects.map(project => (<Project {...project}/>)) }
                </InContainer>
            </OutContainer>
        );
    }
};

const Content = styled.div`
    display: inline-block;
    position: relative;
    margin: 3px;
    width: 480px;
    height: 360px;
    cursor: pointer;
    overflow: hidden;
`;

const Thumbnail = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('${props => props.src}');
    background-size: cover;
    animation: ${props => props.hover ? animation.zoomIn : animation.zoomOut} 0.3s forwards; 
`;

const Preview = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.6);
    color: white;
    animation: ${animation.fadeIn} 0.5s forwards;
    align-items: center;
`;

const PreviewTitle = styled.div`
    margin-top: 110px;
    font-size: 30px;
    font-weight: bold;
`;

const PreviewDescription = styled.div`    
    margin: 15px auto;
    width: 240px;
    font-size: 20px;
    line-height: 1.6;
`;

const DetailView = styled(Dialog)`
    font-family: inherit;
    color: #121E26;
`;

class Project extends PureComponent {
    constructor(props) {
        super(props);

        this.thumbnail = "";
        this.images = [];

        if(props.thumbnail !== "") { 
            this.thumbnail = require(`${props.thumbnail}`);
        }
        if(props.images.length !== 0) {
            this.images = props.images.map(image => require(`${image}`));
        }

        this.state = { 
            enablePreview: false,
            enableDetailView: false,
        };
    }

    handleMouseEnter = (event) => {
        this.setState({ enablePreview: true });
    }

    handleMouseLeave = (event) => {
        this.setState({ enablePreview: false });
    }

    handleClick = (event) => {
        this.setState({ enableDetailView: true, enablePreview: false });
    }

    closeDetailView =() => {
        this.setState({ enableDetailView: false });
    }

    render() {
        const { title, subTitle, videoUrl, description } = this.props;

        const preview = (
             <Preview hover={this.state.enablePreview}
                    onClick={this.handleClick} 
                    onMouseLeave={this.handleMouseLeave}>
                <PreviewTitle>{title}</PreviewTitle>
                <PreviewDescription>{subTitle}</PreviewDescription>
            </Preview>
        );

        const detailView = (
            <DetailView onClose={this.closeDetailView} open={this.state.enableDetailView} maxWidth="md">
                <SlideViewer width={800} height={600}>
                    { videoUrl !== "" ? <iframe title={title} src={videoUrl + '?rel=0'} frameBorder="0"/> : null }
                    { this.images.map((image, key) => ( 
                        <img src={image} key={key} alt="none"/>)
                    )}
                </SlideViewer>
                <DialogContent>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </DialogContent>
            </DetailView>
        );

        return(
            <Content onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <Thumbnail src={this.thumbnail} hover={this.state.enablePreview}/>
                { this.state.enablePreview ? preview : null }
                { this.state.enableDetailView ? detailView : null }
            </Content>
        )
    }
}

Project.defaultProps = {
    title: "",
    subTitle: "",
    thumbnail: "",
    videoUrl: "",
    images: [],
    description: ""
};

export default Projects;