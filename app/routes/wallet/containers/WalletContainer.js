import { connect } from 'react-redux'
import { fetchInfo } from '../../../reducers/info'
import {
	fetchPeers,
	setPeer,
	peersSelectors
} from '../../../reducers/peers'
import {
	fetchChannels,
	setChannel,
	channelsSelectors,
	setForm
} from '../../../reducers/channels'
import Wallet from '../components/Wallet'

const mapDispatchToProps = {
	fetchInfo,
	
	fetchPeers,
	setPeer,
	
	fetchChannels,
	setChannel,

	setForm
}

const mapStateToProps = (state) => ({
	info: state.info,
	
	peers: state.peers,
	channels: state.channels,

	peerModalOpen: peersSelectors.peerModalOpen(state),
	channelModalOpen: channelsSelectors.channelModalOpen(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
